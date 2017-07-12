package organizador.si;/**
 * Created by matheus on 11/07/17.
 */
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class UsuarioRest {
    @RequestMapping(value="/teste", method=RequestMethod.GET)
    public String helloWord() {
        return "Oi, eu estou funcionando!";
    }



}
