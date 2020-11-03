// export function get({ response }) {
//     console.log('get api')
//     response.status(200).send("ok")

//     return { status: 200, headers:[], body: "OK"}
// }

export function get({ params, query, headers }, context) {
    return { status: 200, headers, body: context };
  }