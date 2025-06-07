// models/ordem.model.js

const mongoose = require('mongoose');

// Nova conexão com banco separado
const urlOs = 'mongodb+srv://admin:123Senac@cluster01.xdmri.mongodb.net/dbos';

const osConnection = mongoose.createConnection(urlOs, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ordemSchema = new mongoose.Schema({
    nomeCliente: String,
    telefoneCliente: String,
    equipamento: String,
    servicos: [String],
    status: String,
    valor: Number,
    data: { type: Date, default: Date.now }
});

const Ordem = osConnection.model('Ordem', ordemSchema);

module.exports = Ordem;
