package organizador.si;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import static com.sun.xml.internal.fastinfoset.alphabet.BuiltInRestrictedAlphabets.table;

/**
 * Created by matheus on 16/07/17.
 */

@Entity
@Table(name = "TB_USUARIO")
public class UsuarioPOJO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "email")
    private String email;

    @NotNull
    @Column(name = "senha")
    private String senha;

    @NotNull
    @Column(name = "nome")
    private  String nome;

    public UsuarioPOJO() {


    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UsuarioPOJO)) return false;

        UsuarioPOJO usuarioPOJO = (UsuarioPOJO) o;

        if (getId() != null ? !getId().equals(usuarioPOJO.getId()) : usuarioPOJO.getId() != null) return false;
        if (getEmail() != null ? !getEmail().equals(usuarioPOJO.getEmail()) : usuarioPOJO.getEmail() != null) return false;
        if (getSenha() != null ? !getSenha().equals(usuarioPOJO.getSenha()) : usuarioPOJO.getSenha() != null) return false;
        return getNome() != null ? getNome().equals(usuarioPOJO.getNome()) : usuarioPOJO.getNome() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getEmail() != null ? getEmail().hashCode() : 0);
        result = 31 * result + (getSenha() != null ? getSenha().hashCode() : 0);
        result = 31 * result + (getNome() != null ? getNome().hashCode() : 0);
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
