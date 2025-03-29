# 🖱️ Smooth Scroll with JavaScript

Have you ever wanted to create a button on your page where, when clicked, it smoothly scrolls to a specific section? This repository can help you, even if you don't know anything about JavaScript.

[Click here](https://raylissonx404.github.io/smooth-scroll/) to view the example preview.

### 👨‍💻 The Code

Insert the code from _smoothScroll.js_ into a ```<script>``` tag at the end of the ```<body>```.

Notice:

    { trigger: "btn1", target: "section1", offset: 0, speed: 1000 },
    { trigger: "btn2", target: "section2", offset: 0, speed: 1000 },
    { trigger: "btn3", target: "section3", offset: 0, speed: 1000 }

    // Add as many as you want

Focus only on this part of the code. Notice that the __trigger__ identifier is set to target a _class_ (in this case, `btn1`) of a button. I didn't use an ID here because this way, you can add multiple buttons with the same function. It will smoothly scroll to the section identified as __section1__ when clicked. __Offset__ is the margin between the section and the top of the browser (defined in pixels), and __speed__ is the transition speed between one and the other.

> [!NOTE]
> The level of smoothness will depend on the speed and the distance from the __trigger__ to the __target__.

### 😉 And that's it!

I won’t go into HTML details, as the focus of this repository is for those who don't have knowledge of JavaScript.

I hope I’ve been helpful!
