package organizador.si;

import javax.persistence.*;

/**
 * Created by matheus on 15/07/17.
 */

@Entity
public class SeriePOJO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    @Column(name = "id_imdb")
    private String id_imbdb;


    @Column(name = "avaliacaoUsuario")
    private String avaliacaoUsuario;

    @Column(name = "estaNoPerfil")
    private String estaNoPerfil;


    @Column(name = "estaNoWatchlist")
    private String estaNoWatchlist;

    @Column(name = "epAssistido")
    private String esAssistido;

    public String getEsAssistido() {
        return esAssistido;
    }

    public void setEsAssistido(String esAssistido) {
        this.esAssistido = esAssistido;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getId_imbdb() {
        return id_imbdb;
    }

    public void setId_imbdb(String id_imbdb) {
        this.id_imbdb = id_imbdb;
    }

    public String getAvaliacaoUsuario() {
        return avaliacaoUsuario;
    }

    public void setAvaliacaoUsuario(String avaliacaoUsuario) {
        this.avaliacaoUsuario = avaliacaoUsuario;
    }

    public String getEstaNoPerfil() {
        return estaNoPerfil;
    }

    public void setEstaNoPerfil(String estaNoPerfil) {
        this.estaNoPerfil = estaNoPerfil;
    }

    public String getEstaNoWatchlist() {
        return estaNoWatchlist;
    }

    public void setEstaNoWatchlist(String estaNoWatchlist) {
        this.estaNoWatchlist = estaNoWatchlist;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SeriePOJO)) return false;

        SeriePOJO seriePOJO = (SeriePOJO) o;

        if (getId() != null ? !getId().equals(seriePOJO.getId()) : seriePOJO.getId() != null) return false;
        if (getId_imbdb() != null ? !getId_imbdb().equals(seriePOJO.getId_imbdb()) : seriePOJO.getId_imbdb() != null)
            return false;
        if (getAvaliacaoUsuario() != null ? !getAvaliacaoUsuario().equals(seriePOJO.getAvaliacaoUsuario()) : seriePOJO.getAvaliacaoUsuario() != null)
            return false;
        if (getEstaNoPerfil() != null ? !getEstaNoPerfil().equals(seriePOJO.getEstaNoPerfil()) : seriePOJO.getEstaNoPerfil() != null)
            return false;
        return getEstaNoWatchlist() != null ? getEstaNoWatchlist().equals(seriePOJO.getEstaNoWatchlist()) : seriePOJO.getEstaNoWatchlist() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getId_imbdb() != null ? getId_imbdb().hashCode() : 0);
        result = 31 * result + (getAvaliacaoUsuario() != null ? getAvaliacaoUsuario().hashCode() : 0);
        result = 31 * result + (getEstaNoPerfil() != null ? getEstaNoPerfil().hashCode() : 0);
        result = 31 * result + (getEstaNoWatchlist() != null ? getEstaNoWatchlist().hashCode() : 0);
        return result;
    }

    /**
     * Created by matheus on 15/07/17.
     */

    @Entity
    public static class Usuario {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;



        @Column(name = "email")
        private String email;


        @Column(name = "senha")
        private String senha;

        @Column(name = "nome")
        private String name;


        public Usuario(String email, String nome, String senha) {
            this.email = email;
            this.senha = senha;
            this.name = name;
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

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (!(o instanceof Usuario)) return false;

            Usuario usuario = (Usuario) o;

            if (getId() != null ? !getId().equals(usuario.getId()) : usuario.getId() != null) return false;
            if (getEmail() != null ? !getEmail().equals(usuario.getEmail()) : usuario.getEmail() != null) return false;
            if (getSenha() != null ? !getSenha().equals(usuario.getSenha()) : usuario.getSenha() != null) return false;
            return getName() != null ? getName().equals(usuario.getName()) : usuario.getName() == null;
        }

        @Override
        public int hashCode() {
            int result = getId() != null ? getId().hashCode() : 0;
            result = 31 * result + (getEmail() != null ? getEmail().hashCode() : 0);
            result = 31 * result + (getSenha() != null ? getSenha().hashCode() : 0);
            result = 31 * result + (getName() != null ? getName().hashCode() : 0);
            return result;
        }
    }
}
