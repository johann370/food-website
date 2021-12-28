import Checkbox from "./Checkbox"
import Radio from "./Radio"

const Filterbox = () => {
    return (
        <form id='filterbox'>
            <div className='filter' id='distance-box'>
                <Radio id='distance-1' name='distance' value='1.5' label='&#60;1.5 miles' />
                <Radio id='distance-2' name='distance' value='3' label='&#60;3 miles' />
                <Radio id='distance-3' name='distance' value='5' label='&#60;5 miles' />
                <Radio id='distance-4' name='distance' value='5+' label='&#60;5+ miles' />
            </div>

            <div className='filter' id='price-box'>
                <Radio id='$' name='price' value='$' label='$' />
                <Radio id='$$' name='price' value='$$' label='$$' />
                <Radio id='$$$' name='price' value='$$$' label='$$$' />
            </div>

            <div className='filter' id='food-type'>
                <Checkbox value='value' />
                <Checkbox value='burgers' />
                <Checkbox value='chicken' />
                <Checkbox value='chinese' />
                <Checkbox value='thai' />
                <Checkbox value='mexican' />
                <Checkbox value='pizza' />
                <Checkbox value='italian' />
                <Checkbox value='breakfast' />
                <Checkbox value='dessert' />
                <Checkbox value='fast-food' />
                <Checkbox value='sandwiches' />
            </div>
            <button>Reset</button>
        </form>
    )
}

export default Filterbox
