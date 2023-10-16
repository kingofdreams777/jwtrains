<script setup>
</script>

<template>
    <div id="indexhero" class="hero min-h-screen">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content grid">
            <img src="@/assets/images/indexbanner.jpg" alt="banner"
                class="max-w-screen-lg rounded-lg border bg-black p-1 transition-shadow shadow-2xl">
            <div>
                <h1 class="text-5xl font-bold text-white">Welcome to JWTrains</h1>
                <p class="text-white">Where you can learn to repair your Lionel Trains</p>
            </div>
        </div>

    </div>
    <div class="flex flex-col place-items-center w-full">
        <div class="bg-accent prose">
            <h1>Do You want to repair your Lionel Post War trains?</h1>

            <p>The articles purchased through this website will enable you to maintain your <i>0-27</i> and O guage model
                trains. I am initially focusing on the period from 1946 through 1969, commonly known as the PostWar Era.
                There were hundreds of thousands of trains produced by Lionel during this era and there are numerous third
                parties currently making replacement parts. So, potentially thousands of pieces can be put back in service,
                including yours.
            </p>

            <h1>Why should you buy my repair articles?</h1>

            <p>Each article has detailed instructions with accompanying close-up pictures of how to disassemble the item,
                what tools are needed, how to service all the major components <em>e.g. motors, E-units, smoke units, power
                    trucks, power pickup assemblies, relays</em>, how to test each component, and how to reassemble
                everything. Typically, the price of one article is less than what it would cost to have the item servied by
                a qualified repairman. </p>

            <p>I do not provide part numbers for all components since they are available through other publications. I do
                use the correct name for the parts <i>(either common or factory designated)</i> so you can properly identify
                them when ordering.</p>

            <p>The executable program that runs on your personal computer also allows you to print copies of pages you may
                want to have at your workbench.</p>

            <h1>What does JWTRAINS provide for free?</h1>

            <p>You get a list of the tools I have found that allow me to complete <em>98%</em> of the typical repairs; an
                index of light bulbs for all the Lionel PostWar locomotives, tenders, operating cars, accessories, and
                transformers; tips that answer frequently asked questions; and interesting train-related puzzles.</p>

            <h1>Here's a typical example of how the site works</h1>

            <p>You have a locomotive <em>(say it's a number 54 Ballast Temper)</em> that no longer performs correctly and
                you want to get it running again.</p>
            <ul>
                <li>Click on <em class="link">Locomotives</em></li>
                <li>Find the 54 on the displayed list and click it</li>
                <li>Review the image to ensure it's like yours</li>
            </ul>

            <p>Once you decide you want the Article go to the <NuxtLink to="/articles" class="link">Articles</NuxtLink> link
                for complete information</p>

            <h1>How to Read the Articles</h1>
            <p>The articles are mailed to you on CD-ROMs. They are in an Electronic Book (E-Book) format that has the reader
                embedded in the file. <em>(Click here to download a small sample to your PC.)</em> All you have to do to
                open the file is to insert the CD into your CD-ROM drive and it will automatically run the file. MacIntosh
                users must use their PC Emulator.</p>

            <h1>You may find the <NuxtLink to="/bulb_list">Light Bulb Index</NuxtLink>
            </h1>
            <p>to contain useful information. I've listed the bulb type for all the Lionel PostWar locomotives, tenders,
                operating cars, accessories and transformers. It's important to use the correct bulb to avoid damage to
                plastic parts.</p>
        </div>
    </div>
    <div>
        <p>This page was created by my awesome Grandson who is a fantastic Software Engineer.</p>
    </div>
</template>

<style scoped>
#indexhero {
    background-image: url('/assets/images/indexstockbackground.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
