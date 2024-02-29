import express from 'express';
import os from 'node:os';

const app = express();

const port = 3000;

app.get('/', (req, res) => { 
    console.log(req.ip);

    res.json({ 
        hostname: os.hostname(),
        pod_name: process.env.MY_POD_NAME || '',
        pod_id: process.env.MY_POD_IP || '',
        pod_namespace: process.env.MY_POD_NAMESPACE || '',
        node_name: process.env.MY_NODE_NAME || ''
    })
})

app.listen(port, () => { 
    console.log('Listening')
})
