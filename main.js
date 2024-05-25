//VARIABLES
const formulario = document.querySelector('#formLogin');
let userName;
let password;
const regex = {
    nombre: /^[\w\.\-ñÑ]{4,16}$/,
    password: /^(?=.*[a-z])(?=.*[0-9])\w{4,19}$/i
};
const usuarios = [
    {
        userNameBD: 'Stephani_4',
        passBD: '1234Qwert'
    },
    {
        userNameBD: 'Sergio.7',
        passBD: '567_ASd'
    },
    {
        userNameBD: 'Miguel-111',
        passBD: '890_BNm'
    }
];

//EVENTOS
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    validarFormulario();
    formulario.reset();
});

//FUNCIONES
const validarFormulario = () => {
    userName = formulario.user.value;
    console.log(userName);
    password = formulario.clave.value;
    const objValidar = {
        userName: false,
        pass: false
    };

    if (userName !== '') {
        if (regex.nombre.test(userName)) {
            objValidar.userName = true;
            console.log(objValidar);
        } else objValidar.userName = false;
    } else objValidar.userName = false;

    if (password !== '') {
        if (regex.password.test(password)) {
            objValidar.pass = true;
            console.log(objValidar);
        } else objValidar.pass = false;
    } else objValidar.pass = false;

    const valores = Object.values(objValidar);
    const incorrecto = valores.some((value) => value === false);
    if (incorrecto) {
        alert('Nombre de usuario o contraseña no válido.')
    } else {
        iniciarSesion();
    }
}

const iniciarSesion = () => {
    for (let i = 0; i < usuarios.length; i++) {
        if (userName === usuarios[i].userNameBD && password === usuarios[i].passBD) {
            alert(`Bienvenido ${userName}`);
            break;
        } else {
            alert('Usuario o contraseña incorrecto.')
        }
    }
}