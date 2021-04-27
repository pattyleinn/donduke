var fs = require("fs")

fs.open(
    'wed.txt', 'r',
    (err, handle)=>{
        var buf = new Buffer.alloc(100000)
        fs.read(
            handle, buf, 0, 100000, null,
            (err, length)=>{
                console.log(buf.toString('ascii', 0, length));
                fs.close(handle, function(){})
            }
        )
    }
)