package organizador.si;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by matheus on 15/07/17.
 */

@Entity
@Table(name = "TB_SERIE")
public class SeriePOJO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @NotNull
    @Column(name = "id_imdb",unique = true )
    private String id_imbdb;

    @NotNull
    @Column(name = "avaliacaoUsuario",unique = true)
    private String avaliacaoUsuario;

    @NotNull
    @Column(name = "estaNoPerfil",unique = true)
    private String estaNoPerfil;

    @NotNull
    @Column(name = "estaNoWatchlist",unique = true)
    private String estaNoWatchlist;

    @NotNull
    @Column(name = "epAssistido" ,unique = true)
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




}
