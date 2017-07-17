package organizador.si;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RestController
public class UsuarioREST {

    private UsuarioReposity userRepository;

    @Autowired
    public UsuarioREST(UsuarioReposity usuarioRepository) {
        this.userRepository = usuarioRepository;
    }


    @RequestMapping(value = "/cadastro", method = RequestMethod.POST)
    public List<UsuarioPOJO> postUser(@RequestBody UsuarioPOJO user) {

        for (UsuarioPOJO usuario:userRepository.findAll()) {
            if(usuario.getEmail().equals(user.getEmail())){

                System.out.println("encontrouNoBd");
                return null;
            }

        }
        userRepository.save(user);
        System.out.println("cadastrou");
        return userRepository.findAll();






    }

    @RequestMapping(value = "/logar", method = RequestMethod.POST)
    public void logarUser(@RequestBody UsuarioPOJO user) {
        for (UsuarioPOJO usuario:userRepository.findAll()) {
            if(usuario.getEmail().equals(user.getEmail())){
                System.out.println("ae carai");
                return;
            }

        }
        System.out.println("fudeu");

    }
}
