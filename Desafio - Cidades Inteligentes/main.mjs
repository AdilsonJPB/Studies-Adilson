import bcrypt from 'bcryptjs';

class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = this.criptografarSenha(senha);
        this.permissoes = []; // Permissões do usuário (pode ser expandido conforme necessário)
        this.dataCriacao = new Date();
        this.ultimaDataLogin = null;
        this.ativo = true;
    }

    criptografarSenha(senha) {
        return bcrypt.hashSync(senha, 10);
    }

    validarSenha(senha) {
        return bcrypt.compareSync(senha, this.senha);
    }

    logar() {
        this.ultimaDataLogin = new Date();
        console.log(`${this.nome} fez login em ${this.ultimaDataLogin}`);
    }

    deslogar() {
        console.log(`${this.nome} fez logout`);
    }

    alterarSenha(novaSenha) {
        this.senha = this.criptografarSenha(novaSenha);
        console.log(`${this.nome} alterou a senha`);
    }

    ativarDesativarUsuario() {
        this.ativo = !this.ativo;
        const status = this.ativo ? 'ativado' : 'desativado';
        console.log(`${this.nome} foi ${status}`);
    }
}

class GerenciadorUsuarios {
    constructor() {
        this.usuarios = [];
    }

    criarUsuario(nome, email, senha) {
        if (!this.senhaValida(senha)) {
            console.error('A senha não atende aos requisitos mínimos');
            return null;
        }

        if (!this.validarEmail(email)) {
            console.error('E-mail inválido');
            return null;
        }

        if (this.emailExistente(email)) {
            console.log('E-mail já registrado. Escolha outro e-mail.');
            return null;
        }

        const novoUsuario = new Usuario(nome, email, senha);
        this.usuarios.push(novoUsuario);
        console.log(`${novoUsuario.nome} criado em ${novoUsuario.dataCriacao}`);
        return novoUsuario;
    }

    senhaValida(senha) {
        // Validar se a senha atende aos requisitos mínimos
        const temLetraMaiuscula = senha.split('').some(char => char >= 'A' && char <= 'Z');
        const temLetraMinuscula = senha.split('').some(char => char >= 'a' && char <= 'z');
        const temNumero = senha.split('').some(char => char >= '0' && char <= '9');
        const temCaractereEspecial = senha.split('').some(char => '@#^&+=-'.includes(char));

        return (senha.length >= 8 && temLetraMaiuscula && temLetraMinuscula && temNumero && temCaractereEspecial);
    }

    validarEmail(email) {
        // Implementar uma lógica de validação de e-mail mais robusta (pode ser simplificada para fins didáticos)
        return email.includes('@');
    }

    emailExistente(email) {
        return this.usuarios.some(usuario => usuario.email === email);
    }

    listarUsuarios() {
        console.log('\n=== Lista de Usuários ===');
        this.usuarios.forEach(usuario => {
            console.log(`Nome: ${usuario.nome}, E-mail: ${usuario.email}, Status: ${usuario.ativo ? 'ativo' : 'desativado'}`);
        });
        console.log('=========================\n');
    }

    buscarUsuarioPorEmail(email) {
        return this.usuarios.find(usuario => usuario.email === email);
    }

    alterarDadosUsuario(email, novosDados) {
        const usuario = this.buscarUsuarioPorEmail(email);
        if (usuario) {
            Object.assign(usuario, novosDados);
            console.log(`Dados do usuário ${usuario.nome} alterados`);
        } else {
            console.error('Usuário não encontrado');
        }
    }

    ativarDesativarUsuario(email) {
        const usuario = this.buscarUsuarioPorEmail(email);
        if (usuario) {
            usuario.ativo = !usuario.ativo;
            const status = usuario.ativo ? 'ativado' : 'desativado';
            console.log(`Usuário ${usuario.nome} foi ${status}`);
        } else {
            console.error('Usuário não encontrado');
        }
    }

    excluirUsuario(email) {
        const index = this.usuarios.findIndex(usuario => usuario.email === email);
        if (index !== -1) {
            const usuarioRemovido = this.usuarios.splice(index, 1)[0];
            console.log(`Usuário ${usuarioRemovido.nome} removido`);
        } else {
            console.error('Usuário não encontrado');
        }
    }

    realizarLogin(email, senha) {
        const usuario = this.buscarUsuarioPorEmail(email);
        if (usuario && usuario.validarSenha(senha)) {
            usuario.ultimaDataLogin = new Date();
            console.log(`${usuario.nome} fez login em ${usuario.ultimaDataLogin}`);
            return usuario;
        } else {
            console.error('Credenciais inválidas');
            return null;
        }
    }

    realizarLogout(usuario) {
        console.log(`${usuario.nome} fez logout`);
    }
}

// Exemplo de Uso

const gerenciador = new GerenciadorUsuarios();

const usuario1 = gerenciador.criarUsuario(
    "Adilson Junior",
    "adilsonjuniorpb@gmail.com",
    "adf24A324xs#"
);

const usuario2 = gerenciador.criarUsuario(
    "Flaviana Mendes",
    "flaviaportilho214@gmail.com",
    "adf24A23sa2#"
);

gerenciador.listarUsuarios();

const usuarioEncontrado = gerenciador.realizarLogin("adilsonjuniorpb@gmail.com", "adf24A324xs#");
if (usuarioEncontrado) {
    gerenciador.alterarDadosUsuario("adilsonjuniorpb@gmail.com", { nome: "Adilson Júnior", senha: "NovaSenha789@" });
    gerenciador.ativarDesativarUsuario("adilsonjuniorpb@gmail.com");
    gerenciador.excluirUsuario("flaviaportilho214@gmail.com");
    gerenciador.realizarLogout(usuarioEncontrado);
}

gerenciador.listarUsuarios();
