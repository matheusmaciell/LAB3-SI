package organizador.si;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by matheus on 15/07/17.
 */

@Repository
public class SerieDAO {



    @PersistenceContext
    private EntityManager entity;



    public void cadastraSerie(SeriePOJO seriePOJO){
        entity.persist(seriePOJO);


    }

    public  void removeSerie(SeriePOJO seriePOJO){
        entity.remove(seriePOJO);
    }
}
