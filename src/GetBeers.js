import React from 'react';
export default class GetBeers extends React.Component {
    constructor() {
        super();
        this.state = {
            beers: [],
            didError: false
        };
        this.getBeerInfo = this.getBeerInfo.bind(this);
    }

    render() {
        return (
            <div><ol>{this.state.beers.length!==0 ? this.state.beers.map((beer)=><li>{beer}</li>) :"Could not retrieve any bears. Try again/ensure you can access the server/networtk"}</ol></div>
        )
    }

    componentDidMount() {
        this.getBeerInfo()
    }

    getBeerInfo() {
        let beerArr = [1,2,3,4,5];
        beerArr.map(id => {
            fetch(`https://api.punkapi.com/v2/beers/${id}`)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        //const beers = state.beers.concat(json[0].name);
                        //return {
                        //beers
                        //};
                        beers: this.state.beers.concat(json[0].name)
                    });
                    console.log('well at least this works')
                })
                .catch(err => {
                    this.setState({
                        didError : true
                    });
                });
        })
    }
}
