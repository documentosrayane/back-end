const conectarDb = require('./database');

(async () => {
    const db = await conectarDb();
    const collection = db.collection('contatos');

    class Contato {
        constructor(nome, email, telefone) {
            this.id = null;
            this.nome = nome;
            this.email = email;
            this.telefone = telefone;
        }

        async inserir() {
            const result = await collection.insertOne({
                nome: this.nome,
                email: this.email,
                telefone: this.telefone
            });
            this.id = result.ops[0]._id;
        }

        async alterar() {
            await collection.updateOne(
                { _id: this.id },
                { $set: { nome: this.nome, email: this.email, telefone: this.telefone } }
            );
        }

        async deletar() {
            await collection.deleteOne({ _id: this.id });
        }

        async buscar() {
            const contatoEncontrado = await collection.findOne({ nome: this.nome });
            if (contatoEncontrado) {
                this.id = contatoEncontrado._id;
                this.nome = contatoEncontrado.nome;
                this.email = contatoEncontrado.email;
                this.telefone = contatoEncontrado.telefone;
            }
        }
    }

    module.exports = Contato;
})();
