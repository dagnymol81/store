const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Credits extends React.Component {

  render() {

    const { store } = this.props
  
    return (
      <DefaultLayout> 
        <section className="show-item">
          <div>
          <h2>Credits</h2>
          <p>Merlin's Magic Shop was created by Dagny Mol. Check it out on <a href="https://github.com/dagnymol81/store">GitHub</a></p>
          <p>
            Image Credits:
          </p>
          <ul>
            <li><a href="https://www.si.edu/object/sand:nmnheducation_11038389">Pocket Sand</a></li>
            <li><a href="https://commons.wikimedia.org/wiki/File:T._Ray,_Pole_Vault,_from_World%27s_Champions,_Second_Series_(N43)_for_Allen_%26_Ginter_Cigarettes_MET_DP839301.jpg">Eleven Foot Pole</a></li>
            <li><a href="https://commons.wikimedia.org/wiki/File:Skull_Crowned_with_Snakes_and_Flowers,_The_Duchess_of_Malfi_MET_DP805749.jpg
">Head of Vecna</a></li>
            <li><a href="https://upload.wikimedia.org/wikipedia/commons/8/8f/Books-book-pages-read-literature-159866.jpg">To Serve Man</a></li>
            <li><a href="https://commons.wikimedia.org/wiki/File:Flickr_-_%E2%80%A6trialsanderrors_-_Kellar_and_his_servants,_magician_poster,_ca._1894.jpg">Book of Summoning</a></li>
            <li><a href="https://commons.wikimedia.org/wiki/File:Tarot_cards_-_3_card_spread.jpg ">Deck of a Few Things</a></li>
            <li><a href="https://commons.wikimedia.org/wiki/File:Raczka4.jpg">Ring of Invisbility</a></li>
            <li><a href="https://commons.wikimedia.org/wiki/File:Merchants_and_countrymen_-_KONB11-ZAC-488-NIPPON-II-TAB-VIII-KOOPLIEDEN.jpg">Merchant</a></li>
            <li><a href="https://commons.wikimedia.org/wiki/File:Eilean_Donan_castle_-_95mm.jpg">Castle image by Eilean Donan</a></li>
          </ul>
          <p>Fonts: <a href="https://fonts.google.com/specimen/Dancing+Script">Dancing Script</a> by  Impallari Type via <a href="https://fonts.google.com/">Google Fonts</a></p>
          </div>
          <div></div>
        </section>
        </DefaultLayout>
    )
  }
}

module.exports = Credits