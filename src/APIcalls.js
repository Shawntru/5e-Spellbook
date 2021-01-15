export const fetchSpells = async (pcClass) => {
  const response = await fetch(
    `https://www.dnd5eapi.co/api/classes/${pcClass}/spells`
  );
  return await response.json();
};

export const fetchSpellDetails = async (spell) => {
  const response = await fetch(`https://www.dnd5eapi.co/api/spells/${spell}`);
  return await response.json();
};
