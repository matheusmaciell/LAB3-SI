

package organizador.si;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import static com.sun.xml.internal.fastinfoset.alphabet.BuiltInRestrictedAlphabets.table;

/**
 * Created by matheus on 16/07/17.
 */

@Entity
public class UsuarioPOJO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "email",unique = true)
    private String email;

    @NotNull
    @Column(name = "senha",unique = true)
    private String senha;

    @NotNull
    @Column(name = "nome",unique = true)
    private String nome;



    public UsuarioPOJO(){


    }



    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getEmail() != null ? getEmail().hashCode() : 0);
        result = 31 * result + (getSenha() != null ? getSenha().hashCode() : 0);

        return result;
    }

    public Long getId() {

        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}