// export function headerGetBearerToken() {
//     const YOUR_BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAPHadAEAAAAAEkkNoebE7ugzXnhuWIOyUI2QGCk%3DZWsdA2YjHiTlu7KMMal9SMkjBovg6CeUJbdoVUUq3KVREGeFOY'
//     return {
//         headers: {
//             'Authorization': 'bearer ' + YOUR_BEARER_TOKEN,
//         }
//     }
// }

export default class ApiUtil {

    // static Header = {
    //     "Accept": "application/json",
    //     'Content-Type': 'application/json',
    //     'X-APITOKEN': ApiUtil.getToken()
    // }

    /**
     * Get header api eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJUw7QgSHl1biJ9.-QODYXYmJHofeQZpzcgJM21UMr3AlKDRlp1CrkKSJc88ITWd68TIVoG5hBfXPdj4uhJCaR-RLqrYtZRowbPasA
     */

    static getHeader() {

        global.token = 'AAAAAAAAAAAAAAAAAAAAAPHadAEAAAAAEkkNoebE7ugzXnhuWIOyUI2QGCk%3DZWsdA2YjHiTlu7KMMal9SMkjBovg6CeUJbdoVUUq3KVREGeFOY'

        // let header = new Headers({
        //     "Accept": "application/json",
        //     'Content-Type': 'application/json',
        //     // 'X-APITOKEN': global.token,
        //     // 'X-CLIENT-TIME': DateUtil.parseNow(DateUtil.FORMAT_DATE_TIME_ZONE),
        //     'Authorization': 'bearer ' + global.token,
        //     'X-PLATFORM' : Platform.OS   
        // })
        let header = {
            headers: {
                'Authorization': 'bearer ' + global.token,
            }
        }
        return header
    }
}