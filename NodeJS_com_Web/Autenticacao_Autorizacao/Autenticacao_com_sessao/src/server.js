const express = require('express');
const path = require('path');
const router = require('./routes');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    // 'secret': Uma string usada para assinar e verificar o cookie de sessão.
    // Manter isso seguro e secreto em produção.
    secret: 'palavra-chave-secreta',

    // 'resave': Determina se a sessão deve ser salva novamente no armazenamento,
    // mesmo que ela não tenha sido modificada. Falso economiza recursos ao evitar gravações desnecessárias.
    resave: false,

    // 'saveUninitialized': Indica se sessões não modificadas devem ser salvas.
    // Útil para armazenar apenas sessões que contêm dados relevantes.
    saveUninitialized: true,

    // 'cookie': Configura as propriedades do cookie que armazena o ID da sessão.
    cookie: {
      // 'secure': Define se o cookie deve ser enviado apenas em conexões HTTPS.
      // Deve ser 'true' em produção, mas está 'false' aqui para desenvolvimento local.
      secure: false,
    },
  })
);

app.use(router);

app.listen(3000, () => console.log('Servidor iniciado'));
