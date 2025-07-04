import Express from "express";
import cors from 'cors'
import QRCode from 'qrcode';

const ApiQR = Express()
ApiQR.use(cors())

ApiQR.get('/codeqrgenerate', async (req, res) => {
   const textToQr= req.query.text as string || 'https://github.com/Ryanferre'

   try {
    const QrGenerate= await QRCode.toDataURL(textToQr)

    res.send(`${QrGenerate}`)
   } catch (error) {
    res.send('erro de geracao')
   }

})


const port= process.env.PORT || 3000

ApiQR.listen(port, function(){
    console.log('servidor rodando na porta:' + port)
})


