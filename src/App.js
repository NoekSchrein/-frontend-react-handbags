import React from 'react';
import './App.css';
import Button from "./Components/Button";
import Product from "./Components/Product";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import Tile from "./Components/Tile";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>
            <Button
                buttonText="to the collection"
                isDisabled={false}
            />
            <Button
                buttonText="shop all bags"
                isDisabled={false}
            />

            <Button
                buttonText="pre-order"
                isDisabled={true}
            />

            <main>
                <Product
                    label="Best seller"
                    image={bag1}
                    title="The handy bag"
                    price="400"
                />

                <Product
                    label="Best seller"
                    image={bag2}
                    title="The stylish bag"
                    price="250"
                />

                <Product
                    label="New Collection"
                    image={bag3}
                    title="The simple bag"
                    price="300"
                />

                <Product
                    label="New Collection"
                    image={bag4}
                    title="The trendy bag"
                    price="150"
                />
            </main>
            <footer>
                <Tile title="The Brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio eius fugiat in modi
                        necessitatibus quaerat quas qui rerum velit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cumque deleniti eveniet
                        fugiat harum hic id, mollitia rem soluta voluptatibus.</p>
                </Tile>
                <Tile img={brand} imgDiscription="Brand"/>
                <Tile img={ourStory} imgDiscription="Our Story"/>
                <Tile title="Our Story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque explicabo hic laborum maxime modi
                        molestiae odit quidem ratione tempora unde. Consequuntur culpa cumque eaque in nemo quo sapiente
                        soluta ut.</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;