import { generate } from "./generate"
import { parseHTML } from "./parse"

export function compileToFunctions(template) {
  let ast = parseHTML(template)
    //ไปฃ็ ็ๆ
  let code = generate(ast)
 let render =  new Function(  `with (this) {
    return ${code}
  }`) 
  // console.log(render);
  return render
}