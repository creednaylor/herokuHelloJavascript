function getPort() {
    switch(process.env.NODE_ENV) {
        case 'production': return 8000;
        case 'development': return 3000;
        default: throw new Error(
            `process.env.NODE_ENV needs to be either production or development. 
            It is ${process.env.NODE_ENV}`
        );
    }
}

const configObj = {
    port: getPort(),
}

module.exports = configObj;