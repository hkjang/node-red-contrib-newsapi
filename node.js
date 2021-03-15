const NewsAPI = require("newsapi");
module.exports = function(RED) {
    function FunctionNode(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        this.name = n.name;
        const newsapi = new NewsAPI(n.key);

        for(var key in n){
            node[key] = n[key] || "";
        }
        this.on('input', function(msg) {
            for(var i in msg){
                if(i !== 'req' | i !== 'res' | i !== 'payload' | i !== 'send' | i !== '_msgid'){
                    node[i] = node[i] || msg[i];
                }
            }
            newsapi.v2[node.api](node.queries).then(response => {
                msg.payload = response;
                node.send(msg);
            });

        });
    }
    RED.nodes.registerType("newsapi", FunctionNode);
};
