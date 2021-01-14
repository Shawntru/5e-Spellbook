import { useParams } from 'react-router-dom';
import './SpellSearch';
import { useEffect, useState } from 'react';
import * as API from '../APIcalls';

const SpellSearch = () => {
  const [spells, setSpells] = useState(null);
  const [spellDetails, setSpellDetails] = useState(null);
  const searchCriteria = useParams().pcClass;

  useEffect(() => {
    // if (spellDetails && spells) return;
    API.fetchSpells(searchCriteria).then((data) => setSpells(data.results));

    // if (spells) {
    //   spells.map((spell) =>
    //     API.fetchSpellDetails(spell).then((data) =>
    //       setSpellDetails(data.results)
    //     )
    //   );
    // }
  }, []);

  return <h1>Spell Search for {searchCriteria}</h1>;
};

export default SpellSearch;
