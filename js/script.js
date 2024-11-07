const app1 = {
    data() {
        return {
            contactos: [],
            nuevoNombre: '',
            nuevoTelefono: '',
            nuevaCategoria: ''
        };
    },
    computed: {
        totalLlamadas() {
            var total = 0;
            for (var i = 0; i < this.contactos.length; i++) {
                total += this.contactos[i].llamadas
            }
            return total;
        },

        totalMensajes() {
            var total = 0;

            for (var i = 0; i < this.contactos.length; i++) {
                total += this.contactos[i].mensajes
            }
            return total;

        },
        totalContactos() {
            return this.contactos.length;

        }
    },
    methods: {
        agregarContacto() {
            if (this.nuevoNombre && this.nuevoTelefono && this.nuevaCategoria) {
                this.contactos.push({
                    nombre: this.nuevoNombre,
                    telefono: this.nuevoTelefono,
                    categoria: this.nuevaCategoria,
                    llamadas: 0,
                    mensajes: 0
                });
                this.nuevoNombre = '';
                this.nuevoTelefono = '';
                this.nuevaCategoria = '';
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        }
    }

};

Vue.createApp(app1).mount('#seccion');