export default function sortHeroes(obj) {
    return obj.sort((a, b) => b.health - a.health);
}