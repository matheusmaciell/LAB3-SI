package organizador.si;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by matheus on 20/07/17.
 */
public interface SerieReposity extends JpaRepository<SeriePOJO, Long> {

}
