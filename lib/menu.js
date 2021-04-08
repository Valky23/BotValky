module.exports = {
    menuPrincipal : ()=>{
        return `__| ☾ *🤖 ValkyBOT* ☽ 
|
|>---- ☾ 🤖 *MENU PRINCIPAL* 🤖☽
|
|- Ingrese uno de los siguientes comandos:
|
|- *!menu* 0 -> Informacion
|- *!menu* 1 -> Stickers
|- *!menu* 2 -> Utilidades
|- *!menu* 3 -> Descargas
|- *!menu* 4 -> Grupo
|- *!menu* 5 -> Diversion
|- *!menu* 6 -> Créditos
|
╰╼❥ ValkyBot
    },

    menuStickers: ()=>{
        Regresar `__| ☾ *🤖 ValkyBot* ☽ 
|
|>- Guia : *!comando* guia
|
|>---- ☾ 🖼️ *Stickers* 🖼️☽
|
|- *!s* - Transforme una IMAGEN en sticker.
|- *!s* 1 - Transforme una IMAGEN en sticker circular.
|- *!sgif* - Transforme un VIDEO/GIF en sticker.
|- *!sgif* 1 - Transforme un VIDEO/GIF en sticker (Sin Corte).
|- *!sgif* 2 - Transforme un VIDEO/GIF en sticker circular.
|- *!simg* - Transforme un STICKER en foto.
|- *!tps* - Transforme un TEXTO en sticker.
|- *!ssf* - Transforme una IMAGEN en sticker sin fondo.
|
╰╼❥ ValkyBOT® by *Valky*`
    },

    menuInfoSuporte: ()=>{
        return `__| ☾ *🤖 ValkyBOT®* ☽ 
|
|>- Guia : *!comando* guia
|
|>---- ☾ ❓ *INFO/SOPORTE* ❓☽
|
|- *!info* - Información del bot y contacto del propietario.
|- *!reportar* [mensaje] - Reporte un problema para el dueño.
|- *!misdator* - muestra sus datos de uso .
|
╰╼❥ ValkyBOT® by *Valky*`
    },

    menuDescargas: ()=>{
        regresa `__| ☾ *🤖 ValkyBOT®* ☽ 
|
|>- Guia : *!comando* guia
|
|>---- ☾ 📥 *Descargas* 📥☽
|
|- *!play* [nombre-musica] - Descarga una cancion y envia.
|- *!yt* [nome-video] - Descarga un video de Youtube y lo envía.
|- *!ig* [link-post] - Descarga un video/foto de Instagram y lo envía.
|- *!tw* [link-tweet] - Descarga un video/foto de Twitter y lo envía.
|- *!img* [tema-imagen] - Descarga una imagen y la envía.
|
╰╼❥ ValkyBOT® by *Valky*`
    },

    menuUtilidades: ()=>{
        regresa `__| ☾ *🤖 ValkyBOT* ☽
|
|>- Guia : *!comando* guia
|
|>---- ☾ ⚒️ *UTILIDADES* ⚒️☽
|
|- *!voz* [idioma] [mensaje] - Transforma texto en audio.
|- *!audio* [tipo-edicion] - Responde un audio con este comando para editar..
|- *!idmusica* -  Responde un audio/video para identificar la canción.
|- *!anime* -   Identifica el anime por la foto de una escena.
|- *!animelanc* -  Muestra lanzamientos de anime actuales.
|- *!nicks* -  Muestra tabla con letras para crear apodos.
|- *!traduz* [idioma] [texto] - Traduce texto al idioma que elijas.
|- *!ddd* - Responder a alguien para ver el estado/región.
|- *!buscar* [tema] -  Haz una búsqueda rápida en Internet.
|- *!clima* [cidade] - Muestra la temperatura actual.
|- *!noticias* - Recibe noticias actuales.
|- *!moneda* [dolar|euro|iene] [valor] -  Convierte el valor de una moneda determinada.
|- *!calc* [expresión-matemática] -  Calcula cualquier cuenta que quieras hacer.
|
╰╼❥ ValkyBOT® by *Valky*`
    },

    menuGrupo: (isGroupAdmin)=>{
        if(isGroupAdmin){
            return `__| ☾ *🤖 ValkyBOT®* ☽ 
|
|>- Guia : *!comando* guia
|
|>---- ☾ 👨‍👩‍👧‍👦 *GRUPO* 👨‍👩‍👧‍👦☽ 
|
|-- ☾ GERAL ☽
|
|- *!status* - Ver los recursos encendidos / apagados.
|- *!regras* - Muestra la descripción del grupo con las reglas.
|- *!adms* - Lista todos administradores.
|- *!destravar* - Enviar desbloqueo al grupo.
|- *!mt* [mensagem] - Marca todos MEMBROS/ADMINS con un mensaje.
|- *!mm* [mensagem] - Marca los MIEMBROS con un mensaje.
|- *!dueño* - Muestra dueño do grupo.
|
|-- ☾ CONTROLE DE ATIVIDADE ☽
|
|- *!contador* - Enciende (apaga) el contador de actividad (Mensajes).
|- *!atividade* @marcarmembro - Muestra la actividad del usuario en el grupo. 
|- *!alterarcont* [quantidade] @membro - Cambia la cantidad de mensajes que tiene un miembro.
|- *!imarcar* 1-50 - Marca a todos los usuarios inactivos con menos de 1 a 50 mensajes.
|- *!ibanir* 1-50 - Prohibir a todos los usuarios inactivos con menos de 1 a 50 mensajes.
|- *!topativos* 1-50 - Marca a los miembros más activos en un ranking de 1 a 50 personas.
|
|-- ☾ BLOQUEO DE COMANDOS ☽ 
|
|- *!bcmd* [comando1 comando2 etc] - Bloquea los comandos elegidos en el grupo.
|- *!dcmd* [comando1 comando2 etc] - Desbloquea los comandos elegidos en el grupo.
|
|-- ☾ LISTA NEGRA ☽ 
|
|- *!blista* +55 (21) 9xxxx-xxxx - Agrega el número a la lista negra do grupo.
|- *!dlista* +55 (21) 9xxxx-xxxx - Elimina el número de la lista negra do grupo.
|- *!listanegra* - Muestra la lista negra do grupo.
|
|-- ☾ RECURSOS ☽ 
|
|- *!mutear* - Ativa/desactiva el uso de comandos.
|- *!alink* - Ativa/desactiva el anti-link.
|- *!bv* - Ativa/desactiva la bienvenida.
|- *!afake* - Ativa/desactiva o anti-fake.
|- *!aflood* - Ativa/desactiva o anti-flood.
|
|-- ☾ ADMINISTRATIVO ☽
|
|- *!add* +55 (21) 9xxxx-xxxx - Agrega al grupo.
|- *!ban* @marcarmembro - Ban do grupo.
|- *!f* - Abre/fecha o grupo.
|- *!promover* @marcarmembro - Promove a ADM.
|- *!rebaixar* @marcaradmin - Desgrada al MIEMBRO.
|- *!link* - Muestra el link do grupo.
|- *!rlink* - Restablece el enlace do grupo.
|- *!apg* - Borrar mensaje do BOT.
|- *!bantodos* - Ban a todos los membros.
|
|-- ☾ VOTACION BAN ☽
|
|- *!Votacion* - Vea si hay miembros que voten a favor de la prohibición.
|- *!vb* @marcarmembro [max-votos] - Abre una encuesta de prohibición.
|- *!votar* - Vote por el miembro que está votando.
|
|-- ☾ ENCUESTA ☽
|
|- *!encuesta* pregunta, opción1, opción2,etc.. - Abra una encuesta con una pregunta as opciones.
|- *!encuesta* - Cierra la encuesta actual y muestra los resultados.
|- *!verenquete* - Vea si hay alguna votación abierta.
|- *!votarenquete* [opcion-nuevo] - Vote por la opción seleccionada en la encuesta.
|
|-- ☾ ETC.. ☽
|
|- *!ruletarusa* - Expulsa un miembro aleatoria do grupo.
|
╰╼❥ ValkyBOT® by *Valky*`
        } else {
            return `__| ☾ *🤖 ValkyBOT®* ☽ 
|
|>- Guia : *!comando* guia
|
|>---- ☾ 👨‍👩‍👧‍👦 *GRUPO* 👨‍👩‍👧‍👦☽
|
|-- ☾ GERAL ☽
|- *!reglas* - Muestra la descripcion do grupo con as reglas.
|- *!adms* - Lista de todos administradores.
|- *!dueño* - Muestra propietario do grupo.
|
|-- ☾ VOTACION BAN ☽
|
|- *!Votacion* - Vea si hay miembros que voten a favor de la prohibición.
|- *!votar* - Vote por el miembro que está votando.
|
|--☾ ENQUETE ☽
|
|- *!Votaciones* - Vea si hay alguna votación abierta.
|- *!votarenquete* [opcion-numero] - Vote por la opción seleccionada en la encuesta.
|
╰╼❥ ValkyBOT® by *Valky*`
        }
    },

    menuDiversao:(isGroup)=>{
        if(isGroup){
            return `__| ☾ *🤖 ValkyBOT®* ❣ 
|
|>- Guia : *!comando* guia
|
|>---- ☾ 🧩 *DIVERSION/OTROS* ☽
|
|- *!caracoroa* - Cara o cruz.
|- *!ppt* [piedra, papel, tijera] - Pidra, papel o tijera.
|- *!par* @persona1 @persona2 - Mide el nivel de compatibilidad de 2 personas.
|
╰╼❥ LBOT® by *Leal*`
        } else {
            return `__| ☾ *🤖 ValkyBOT®* ☽ 
|
|>- Guia : *!comando* guia
|
|>---- ☾ 🧩 *DIVERSION/OTROS* ☽
|
|- *!caracoroa* - Cara o cruz.
|- *!ppt* [piedra, papel, tijera] - Pidra, papel o tijera.
|
╰╼❥ ValkyBOT® by *Valky*`
        }
    },

//NO RETIRE ESTA PARTE DE CRÉDITOS, PIENSE EN EL TRABAJO Y ESFUERZO QUE TENEMOS PARA MANTENER EL BOT ACTUALIZADO Y FUNCIONANDO.
    menuCreditos: ()=>{
        return `☾ *🤖 ValkyBOT®* ☽ 

Creadordel Bot : Valky
Instagram : https://www.instagram.com/valkyfamily/
Nombre del bot: K~BOT
Contacto del creador: wa.me/523330245511
Versión actual: 1.8.9
`
    },

    menuAdmin: ()=>{
        return `__| ☾ *🤖 ValkyBOT®* ☽ 
|
|>- Guia : *!comando* guia
|
|>---- ☾ ⚙️ *ADMINISTRACIÓN* ⚙️☽
|
|-- ☾ GERAL ☽
|
|- *!infocompleta* - Informacion completa do BOT.
|- *!ping* - Informacion do sistema y tiempo de respuesta.
|- *!print* - Muestra la pantalla do bot.
|- *!limpartudo*  - Borra todos los chats(Grupos y contatos).
|- *!limpar*  - Borra todos los chats de contatos.
|- *!bloquear* @usuario  - Bloquear a un usuario mencionado.
|- *!desbloquear* @usuario  - Desbloquea a un usuario mencionado.
|- *!listablock*  - Lista de todos los bloqueados.
|- *!estado* [online, offline o mantenimiento]  - Seleciona el estado atual do bot.
|- *!bctodos* [mensagem] - Haz un anuncio con mensaje para todos CHATS.
|- *!bcgrupos* [mensagem] - Hacer un anuncio con un mensaje para los GRUPOS.
|- *!bccontatos* [mensagem] - Hacer un anuncio con un mensaje solo para los CONTATOS.
|- *!desligar* - Apaga el bot.
|
|-- ☾ BLOQUEIO DE COMANDOS ☽ 
|
|- *!bcmdglobal* [comando1 comando2 etc] - Bloquea los comandos elegidos a nivel mundial.
|- *!dcmdglobal* [comando1 comando2 etc] - Desbloquea los comandos elegidos a nivel mundial.
|
|-- ☾ BOT USUÁRIOS ☽
|
|- *!verdados* @usuario - Muestra los datos do usuario registrado en el  bot.
|- *!tipos* - Muestra todos los tipos de usuarios disponibles.
|- *!alterartipo* [tipo] @usuario - Cambiar el tipo do usuário.
|- *!limpartipo* [tipo] @usuario - Borra todos los usuarios de este tipo y los convierte en usuarios comunes.
|- *!usuarios* [tipo]  - Muestra todos los usuarios do tipo elegido.
|
|-- ☾ CONTROL/LIMITE ☽
|
|- *!taxalimite* [qtd-comandos] [tempo-bloqueio] - Habilita / deshabilita la tasa de comandos por minuto.
|- *!limitediario* - Activa / desactiva el límite diario de comandos por día.
|- *!limitarmsgs* [qtd-msgs] [intervalo] -Habilita / deshabilita el límite de mensajes privados en un intervalo.
|- *!mudarlimite* [tipo] [novo-limite] - Cambia el límite de comandos por día para un tipo de usuario.
|- *!rtodos* - Restablece los comandos diarios de todos.
|- *!r* @usuario - Restablece los comandos diarios de un usuario.
|
|-- ☾ GRUPOS ☽
|
|- *!sair* - Salir do grupo.
|- *!sairgrupos* - Salir de todos los grupos.
|- *!entrargrupo* [link-grupo] - BOT entra no grupo.
|- *!rconfig* - Reseta as configuraciones de los grupos.
|
╰╼❥ ValkyBOT® by *Valky*`
    }
}
