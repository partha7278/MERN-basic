const { format, createLogger, transports } = require('winston');
const config = require('config');

module.exports = function(err,source='unknown',type='unknown'){
    
    const logLikeFormat = {
        transform(info) {
            const { timestamp, message } = info;
            const level = info[Symbol.for('level')];
            const args = info[Symbol.for('splat')] ? info[Symbol.for('splat')] : '';
            info[Symbol.for('message')] = JSON.stringify({level:level,timestamp:timestamp,source:args[0],message:message.message,othersData:err,stack:err.stack ? err.stack : ''});  
            return info;
        }
    };

    let logtype = [ new transports.Console() ];
    if(config.get('logging')){
        logtype = [
            new transports.Console(),
            new transports.File({ filename:'/var/log/error.log',level: 'warn',handleExceptions: true})
        ];
    }



    const logger = createLogger({
        format: format.combine(
        format.timestamp(),
        logLikeFormat,
        ),
        transports: logtype
    });

    if(type == 'unknown' || type == 'error'){
        logger.error(err,source);
    }else if(type == 'info'){
        logger.info(err,source);
    }

}