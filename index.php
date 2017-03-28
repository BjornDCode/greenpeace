<?php
    include 'includes/header.php';
 ?>

        <section class="main-section slider-section">
            <div class="overlay">
                <h3>How many times per week do you eat meat?</h3>
                <h2 class="output">5 days</h2>
                <input type="range" name="daySlider" min="1" max="7" value="5" step="1" class="slider">
            </div>
        </section>

        <section class="main-section impact-section">
            <div class="headline">
                <h3>Your impact</h3>
                <span>pr. year</span>
            </div>
            <div class="table">
                <div class="factor">
                    <img src="assets/images/cow.svg" alt="Meat">
                    <p><span class="meat-output">21</span> kg. of Meat</p>
                </div>
                <div class="factor">
                    <img src="assets/images/water.png" alt="Water">
                    <p><span class="water-output">120.000</span> Liters of Water</p>
                </div>
                <div class="factor">
                    <img src="assets/images/land.svg" alt="Land">
                    <p><span class="land-output">3.000</span> km2 of Land</p>
                </div>
                <div class="factor">
                    <img src="assets/images/trees.png" alt="Trees">
                    <p><span class="trees-output">45</span> Trees</p>
                </div>
                <div class="factor">
                    <img src="assets/images/co2.png" alt="CO2">
                    <p><span class="co2-output">1.2</span> Tons of CO2</p>
                </div>
                <div class="factor">
                    <img src="assets/images/waste.png" alt="Waste">
                    <p><span class="waste-output">4</span> Tons of Waste</p>
                </div>
            </div>
        </section>

        <section class="main-section savings-section">
            <div class="headline">
                <h3>Your savings</h3>
                <span>if you eat meat 1 day less per week</span>
            </div>
            <div class="table">
                <div class="factor">
                    <img src="assets/images/cow.svg" alt="Meat">
                    <p><span class="meat-output">21</span> kg. of Meat</p>
                </div>
                <div class="factor">
                    <img src="assets/images/water.png" alt="Water">
                    <p><span class="water-output">120.000</span> Liters of Water</p>
                </div>
                <div class="factor">
                    <img src="assets/images/land.svg" alt="Land">
                    <p><span class="land-output">3.000</span> km2 of Land</p>
                </div>
                <div class="factor">
                    <img src="assets/images/trees.png" alt="Trees">
                    <p><span class="trees-output">45</span> Trees</p>
                </div>
                <div class="factor">
                    <img src="assets/images/co2.png" alt="CO2">
                    <p><span class="co2-output">1.2</span> Tons of CO2</p>
                </div>
                <div class="factor">
                    <img src="assets/images/waste.png" alt="Waste">
                    <p><span class="waste-output">4</span> Tons of Waste</p>
                </div>
            </div>
        </section>

        <section class="main-section information-section">
            <h3>More information</h3>
            <div class="info-container">
                <div class="text">
                    <p>Phasellus tristique massa sed ligula euismod suscipit. Phasellus gravida congue est, nec suscipit ipsum posuere in. Morbi in purus sapien. Nullam ornare tincidunt ligula, et condimentum ex suscipit quis. Morbi pulvinar mattis lacus id dictum. Vestibulum et lectus arcu. In viverra, metus egestas commodo tincidunt, ex odio semper ipsum, cursus congue risus lorem ut magna.</p>
                    <p>Donec maximus odio magna, vel maximus ante elementum vitae. Donec sit amet urna arcu. Praesent varius lacus nec mattis feugiat. Ut consequat, quam sit amet porttitor fringilla, arcu mauris mollis orci, nec laoreet justo nisl et felis. Suspendisse consequat auctor volutpat. Ut iaculis elit nibh, a finibus dolor interdum quis. Curabitur leo turpis, tincidunt a ornare vitae, pulvinar vel mauris. Pellentesque sollicitudin vulputate risus, sed iaculis mauris pretium ut.</p>
                    <p>Vivamus mollis feugiat dignissim. Etiam nec ullamcorper magna. Phasellus dolor ligula, efficitur et dapibus vel, pharetra facilisis neque. Sed hendrerit ut erat at egestas. Aliquam lectus felis, sodales nec nibh quis, ornare vestibulum purus. Cras viverra augue urna, non porttitor libero rutrum eu. Donec placerat metus a ullamcorper facilisis.</p>
                </div>
                <div class="more-info-sections">
                    <a href="articles/index.php?cat=Greenhouse+Gasses" class="more-info-link">More information about greenhouse emissions</a>
                    <a href="articles/index.php?cat=Meat+Consumption" class="more-info-link">How you can reduce your meat consumption</a>
                    <a href="#" class="more-info-link">Cras viverra augue urna non porttitor libero</a>
                </div>
            </div>
        </section>

        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/alton/1.2.1/jquery.alton.js"></script>
        <script type="text/javascript" src="assets/js/countUp.js"></script>
        <script type="text/javascript" src="assets/js/script.js"></script>

<?php
    include 'includes/footer.php';
 ?>
