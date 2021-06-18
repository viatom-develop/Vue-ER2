import {CRC8} from "@/assets/js/ble/crc8"
export default {
    inCrc8(data){//接受数据验证crc
        let crc = data.substr(data.length-2,2)
        let  ArrayData= []
        for(let i=0;i<data.length-2;i+=2){
            ArrayData.push(parseInt(data.substring(i,i+2),16))
        }
        //把十进制的ArrayData转化crc
        const crc8 = new CRC8()
        const checksum = crc8.checksum(ArrayData)
        if(checksum == parseInt(crc,16)){
            return true
        }else{
            return false
        }
    },
    //发送数据计算crc
    calculationCrc8(data){
        let  ArrayData= []
        for(let i=0;i<data.length;i+=2){
            ArrayData.push(parseInt(data.substring(i,i+2),16))
        }
        //把十进制的ArrayData转化crc
        const crc8 = new CRC8()
        const checksum = crc8.checksum(ArrayData)
        let value = parseInt(checksum).toString(16)
        if(value.length<2){
            value = '0' + value
        }
        return value
    }
}