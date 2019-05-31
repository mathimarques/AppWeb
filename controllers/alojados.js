//File: controllers/alojados.js
var mongoose = require('mongoose');
var Alojado  = mongoose.model('Alojado');

//GET - Return all Alojados in the DB
exports.findAllAlojados = function(req, res) {
	Alojado.find(function(err, alojados) {
    if(err) res.send(500, err.message);

    console.log('GET /alojados')
		res.status(200).jsonp(alojados);
	});
};

//GET - Return a Alojado with specified ID
exports.findById = function(req, res) {
	Alojado.findById(req.params.id, function(err, alojado) {
    if(err) return res.send(500, err.message);

    console.log('GET /alojado/' + req.params.id);
		res.status(200).jsonp(alojado);
	});
};

//POST - Insert a new Alojado in the DB
exports.addAlojado = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var alojado = new Alojado({
    nombre:  req.body.nombre,
    apellido:    req.body.apellido,
    tipo_documento:  req.body.tipo_documento,
    documento:     req.body.documento,
    cobertura: req.body.cobertura,
    nro_afiliado:  req.body.nro_afiliado,
    grado_dependencia:  req.body.grado_dependencia,
    diagnostico_medico:  req.body.diagnostico_medico,
    fecha_alta:  req.body.fecha_alta,
    fecha_baja:  req.body.fecha_baja,
    nombre_responsable:    req.body.nombre_responsable,
    apellido_responsable:    req.body.apellido_responsable,
    parentesco_responsable:   req.body.parentesco_responsable,
    tipo_documento_responsable:   req.body.tipo_documento_responsable,
    documento_responsable:  req.body.documento_responsable,
    telefono_responsable:  req.body.telefono_responsable,
    declara_incapacidad:  req.body.declara_incapacidad
	});

	alojado.save(function(err, alojado) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(alojado);
	});
};

//PUT - Update a register already exists
exports.updateAlojado = function(req, res) {
	Alojado.findById(req.params.id, function(err, alojado) {
    alojado.nombre = req.body.nombre;
    alojado.apellido = req.body.apellido;
    alojado.tipo_documento = req.body.tipo_documento;
    alojado.documento = req.body.documento;
    alojado.cobertura = req.body.cobertura;
    alojado.nro_afiliado = req.body.nro_afiliado;
    alojado.grado_dependencia = req.body.grado_dependencia;
    alojado.diagnostico_medico = req.body.diagnostico_medico;
    alojado.fecha_alta = req.body.fecha_alta;
    alojado.fecha_baja = req.body.fecha_baja;
    alojado.nombre_responsable = req.body.nombre_responsable;
    alojado.apellido_responsable = req.body.apellido_responsable;
    alojado.parentesco_responsable = req.body.parentesco_responsable;
    alojado.tipo_documento_responsable = req.body.tipo_documento_responsable;
    alojado.documento_responsable = req.body.documento_responsable;
    alojado.telefono_responsable = req.body.telefono_responsable;
    alojado.declara_incapacidad = req.body.declara_incapacidad;

		alojado.save(function(err) {
			if(err) return res.send(500, err.message);
      console.log('PUT /alojado/' + req.params.id);
      res.status(200).jsonp(alojado);
		});
	});
};

//DELETE - Delete a Alojado with specified ID
exports.deleteAlojado = function(req, res) {
	Alojado.findById(req.params.id, function(err, alojado) {
		alojado.remove(function(err) {
			if(err) return res.send(500, err.message);
      console.log('DELETE /alojado/' + req.params.id);
      res.status(200).jsonp(alojado);
		})
	});
};
