module.exports = {
    /**
     * Metodo que suma dos Numero
     * @example
     * n1=1, n2=2 => resultado = 3
     * @param {*} n1 numero uno de la suma 
     * @param {*} n2 numero dos de la suma
     */
    suma: function(n1,n2){
        return (this.isNumber(n1,n2)?n1+n2:this.errorMsg());
    },
    /**
     * Metodo que Multiplica dos Numero
     * @example
     * n1=1, n2=2 => resultado = 2
     * @param {*} n1 numero uno de la multi 
     * @param {*} n2 numero dos de la multi
     */
    multiplicacion: function(n1,n2){
        return (this.isNumber(n1,n2)?n1*n2:this.errorMsg());
    },
        /**
     * Metodo que divide dos Numero
     * @example
     * n1=1, n2=2 => resultado = 0.5
     * @param {*} n1 numero uno de la divide 
     * @param {*} n2 numero dos de la divide
     */
    division: function(n1,n2){
        return (this.isNumber(n1,n2)?n1/n2:this.errorMsg());
    },
        /**
     * Metodo que resta dos Numero
     * @example
     * n1=1, n2=2 => resultado = -1
     * @param {*} n1 numero uno de la resta 
     * @param {*} n2 numero dos de la resta
     */
    resta: function(n1,n2){
        return (this.isNumber(n1,n2)?n1-n2:this.errorMsg());
    },
    errorMsg: function(){
        console.log("Por favor Introdusca Valores Numericos");
        return;
    },
         /**
     * Metodo que comprueba que los parametros sean  Numericos
     * 
     * @param {*} n1 
     * @param {*} n2 
     */
    isNumber:function(n1,n2){
        if(typeof n1 !== 'number' || typeof n2 !== 'number'){
            return false;
        }else{
            return true;
        }
    }

}