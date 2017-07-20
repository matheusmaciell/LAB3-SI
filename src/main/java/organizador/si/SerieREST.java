package organizador.si;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Table;
import java.util.List;

/**
 * Created by matheus on 20/07/17.
 */

@RestController
public class SerieREST {

    private SerieReposity serieReposity;



    @Autowired
    public SerieREST(SerieReposity serieReposity) {
        this.serieReposity = serieReposity;
    }

    @RequestMapping(value = "/salvar", method = RequestMethod.POST)
    public List<SeriePOJO> salvar(@RequestBody SeriePOJO serie){
        for (SeriePOJO serieBD:serieReposity.findAll()){
            if(serieBD.getId_imbdb().equals(serie.getId_imbdb())){
                return  null;
            }
        }


        serieReposity.save(serie);
        return serieReposity.findAll();
    }
    
    
    

    @RequestMapping(value="/serie/{userId}", method = RequestMethod.GET)
    public List<SeriePOJO> getSeriesSalvas(@PathVariable String userId){
    	return serieReposity.findByUserId(userId);
    	
    	
    }
    
    
    @RequestMapping(value = "/seriesperfil", method = RequestMethod.POST)
    public boolean seriesNoPerfil(@RequestBody SeriePOJO serie){
    	for (SeriePOJO serieBD:serieReposity.findAll()){
            if(serieBD.getId_imbdb().equals(serie.getId_imbdb())){
                return  true;
            }
        }


        
        return false;
    }
}
