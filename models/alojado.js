exports = module.exports = function(app, mongoose) {

  var alojadoSchema = new mongoose.Schema({
    nombre:    { type: String },
    apellido:    { type: String },
    tipo_documento:    {
      type: String,
      enum: ['DNI', 'LE', 'LC']
    },
    documento:     { type: Number },
    cobertura: { type: String },
    nro_afiliado:  { type: String },
    grado_dependencia:    {
      type: String,
      enum: ['DEPENDIENTE', 'SEMIDEPENDIENTE', 'AUTOVÁLIDO']
    },
    diagnostico_medico:  { type: String },
    fecha_alta:  { type: Date },
    fecha_baja:  { type: Date },
    nombre_responsable:    { type: String },
    apellido_responsable:    { type: String },
    parentesco_responsable:    { type: String },
    tipo_documento_responsable:    {
      type: String,
      enum: ['DNI', 'LE', 'LC']
    },
    documento_responsable:  { type: Number },
    telefono_responsable:  { type: Number },
    declara_incapacidad:  { type: Boolean },
  });

    mongoose.model('Alojado', alojadoSchema);

};
