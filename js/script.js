import * as THREE from "three";

// import { TWEEN } from "three/addons/libs/tween.module.min.js";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/addons/renderers/CSS3DRenderer.js";
var stopfunction = false;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const table = [
  "covers/got7_nanana.png",
  '<div class="spotify_box" style="background-color: rgb(12, 137, 62);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/2tEMbypmvYhf84mzVbhxwZ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/straykids_sclass.png",
  '<div class="spotify_box" style="background-color: rgb(83, 83, 83);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/3gTQwwDNJ42CCLo3Sf4JDd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/enhypen_polaroidlove.png",
  '<div class="spotify_box" style="background-color: rgb(184, 8, 40);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/5elW2CKSoqjYoJ32AGDxf1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/seulgi_28reasons.jpg",
  '<div class="spotify_box" style=" background-color:rgb(208, 24, 32);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1dfsPqH09vnzUWEOsN98Ex?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/astro_crazysexycool.png",
  '<div class="spotify_box" style=" background-color:rgb(40, 120, 184);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/4hKhWLyYwCmugcMP8vbr7s?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/apink_dilemma.jpg",
  '<div class="spotify_box" style="background-color: rgb(57, 127, 146);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/3j0x2BUUtm2obQXS1lZuN3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/enhypen_durnk-dazed.png",
  '<div class="spotify_box" style="background-color:rgb(168, 8, 48);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1wcr8DjnN59Awev8nnKpQ4?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/lesserafim_antifragile.png",
  '<div class="spotify_box" style="background-color: rgb(72, 72, 72);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/4fsQ0K37TOXa3hEQfjEic1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/nctdream_candy.png",
  '<div class="spotify_box" style="background-color:rgb(0, 72, 24);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/27bIik73QCu8Xzt3xpG1bI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/ive_iam.png",
  '<div class="spotify_box" style="background-color: rgb(83, 83, 83);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/70t7Q6AYG6ZgTYmJWcnkUM?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/newjeans_omg.png",
  '<div class="spotify_box" style="background-color: rgb(83, 83, 83);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/65FftemJ1DbbZ45DUfHJXE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/redvelvet_birthday.png",
  '<div class="spotify_box" style="background-color: rgb(207, 57, 150);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/4LJgBT9yo0beHlaBesCFEv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/seventeen_super.png",
  '<div class="spotify_box" style="background-color:rgb(83, 83, 83);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/3AOf6YEpxQ894FmrwI9k96?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/ive_kitsch.png",
  '<div class="spotify_box" style="background-color: rgb(188, 81, 128);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/4hbU7BVioG3WnoRNEy5YUf?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/treasure_u.png",
  '<div class="spotify_box" style="background-color: rgb(0, 134, 112);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/5NIHhuAdsaZHmGeEoHiGY7?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/nct127_2baddies.jpg",
  '<div class="spotify_box" style="background-color: rgb(0, 96, 192);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1WKLxJpDqkQ9x1qEDNutoX?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/aespa_spicy.png",
  '<div class="spotify_box" style="background-color:rgb(40, 112, 176);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1ULdASrNy5rurl1TZfFaMP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/lesserafim_unforgiven.png",
  '<div class="spotify_box" style=" background-color: rgb(160, 8, 48);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/51vRumtqbkNW9wrKfESwfu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/nmixx_lovemelikethis.png",
  '<div class="spotify_box" style=" background-color: rgb(92, 122, 141);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/6P3CtlzTKLxcNYGOS3es8m?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/taeyeon_invu.png",
  '<div class="spotify_box" style="background-color: rgb(64, 72, 88);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/7rXcCpIAoOUCydkVDMcoPV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/nct127_cherrybomb.png",
  '<div class="spotify_box" style=" background-color: #9d0026;"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/3o8QzWsiiqTUVgBZfHgF58?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/kep1er_up.png",
  '<div class="spotify_box" style="background-color: rgb(28, 119, 217);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/3XZAvh2NCDQYHgJei35VQ1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/crush_rushhour.png",
  '<div class="spotify_box" style="background-color: rgb(176, 48, 32);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/5aucVLKiumD89mxVCB4zvS?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/txt_goodboygonebad.jpg",
  '<div class="spotify_box" style=" background-color: #9d001d;"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1HsSIPLTQT354yJcQGfEY3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/gidle_mybag.jpg",
  '<div class="spotify_box" style="background-color: rgb(216, 8, 88);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/1t8sqIScEIP0B4bQzBuI2P?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/seventeen_hot.png",
  '<div class="spotify_box" style=" background-color: rgb(83, 83, 83);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/6I2tqFhk8tq69iursYxuxd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/lesserafim_impurities.png",
  '<div class="spotify_box" style="background-color:rgb(72, 72, 72);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/7F0MuIk5glqtowCUjbn9es?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/taeyang_shoong.png",
  '<div class="spotify_box" style="background-color:rgb(89, 123, 137);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/5HrIcZOo1DysX53qDRlRnt?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/gidle_nxde.jpg",
  '<div class="spotify_box" style="background-color: rgb(168, 0, 0);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/6NnCWIWV740gP7DQ8kqdIE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/aespa_imunhappy.png",
  '<div class="spotify_box" style="background-color:rgb(40, 112, 176);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/6fzio74FGqFFsenYkbGPzR?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/jisoo_flower.png",
  '<div class="spotify_box" style="background-color: rgb(152, 8, 16);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/69CrOS7vEHIrhC2ILyEi0s?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/aespa_illusion.png",
  '<div class="spotify_box" style="background-color: rgb(120, 113, 156);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/5uFqjHOo3Sh0bVPCKf3DdH?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/nct127_favorite..png",
  '<div class="spotify_box" style="background-color: rgb(122, 118, 118);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/2R8MZR1RCP4cIJITHDPRbY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/ive_eleven.png",
  '<div class="spotify_box" style="background-color: rgb(216, 16, 72);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/7n2FZQsaLb7ZRfRPfEeIvr?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/treasure_darari.png",
  '<div class="spotify_box" style="background-color:rgb(0, 134, 112);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/0dcnrLo8s1rhjm8euGjI4n?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/chunga_bicycle.png",
  '<div class="spotify_box" style="background-color: rgb(0, 104, 184);"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/7wDVvxMUdW5MtJUqFtuXUz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/exo_monster.png",
  '<div class="spotify_box" style="background-color: #535353;"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/7GbUWl6qLW1gdngbEV2WDJ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/glitch mode.png",
  '<div class="spotify_box" style="background-color: #005d53;"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/5b1PngLlxc7hj3fJXrE2Zm?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/iu_throughthenight.png",
  '<div class="spotify_box" style="background-color: #654b52;"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/3P3UA61WRQqwCXaoFOTENd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
  "covers/izone_panorama.png",
  '<div class="spotify_box" style="background-color: #202847;"><iframe style="border-radius:12px" data-src="https://open.spotify.com/embed/track/0CnpSTdL9l5vQM4YnzXtyo?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>',
];

let camera, scene, renderer;
let controls;

var isMouseDown = false;
var boxmove = false;

const objects = [];
const targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function onMouseMove(event) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function init() {
  camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 3000;

  scene = new THREE.Scene();

  let element;

  // table

  for (let i = 0; i < table.length; i += 2) {
    element = document.createElement("div");
    element.className = "element";
    // element.addEventListener("mouseover", onDocumentMouseDown, false);

    const innercard = document.createElement("div");
    innercard.className = "flip-card-inner";

    element.appendChild(innercard);

    const frontcard = document.createElement("div");
    frontcard.className = "flip-card-front";
    innercard.appendChild(frontcard);

    const img = document.createElement("img");
    img.setAttribute("rel", "preload");
    img.style.width = "300px";
    img.style.height = "424px";
    img.src = table[i];

    frontcard.appendChild(img);

    // 	//flip card back
    const details = document.createElement("div");
    details.className = "flip-card-back";

    // details.className = 'details';
    details.innerHTML = table[i + 1];

    innercard.appendChild(details);

    const objectCSS = new CSS3DObject(element);
    objectCSS.position.x = Math.random() * 4000 - 2000;
    objectCSS.position.y = Math.random() * 4000 - 2000;
    objectCSS.position.z = Math.random() * 4000 - 2000;

    scene.add(objectCSS);

    objects.push(objectCSS);

    const object = new THREE.Object3D();

    object.position.x = table[i + 3] * 320 - 1330;
    object.position.y = -(table[i + 4] * 520) + 990;

    targets.table.push(object);
  }

  // sphere

  const vector = new THREE.Vector3();

  for (let i = 0, l = objects.length; i < l; i++) {
    const phi = Math.acos(-1 + (2 * i) / l);
    const theta = Math.sqrt(l * Math.PI) * phi;

    const object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    vector.copy(object.position).multiplyScalar(2);

    object.lookAt(vector);

    targets.sphere.push(object);
  }

  // helix

  for (let i = 0, l = objects.length; i < l; i++) {
    // const theta = i * 0.176 + Math.PI;
    const theta = i * 0.158 + Math.PI;

    const y = -1;

    const object = new THREE.Object3D();
    //control the gap between cards
    object.position.setFromCylindricalCoords(1600, theta, y);

    vector.x = object.position.x * 1;
    vector.y = object.position.y;
    vector.z = object.position.z * 1;

    object.lookAt(vector);

    targets.helix.push(object);
  }

  // grid

  for (let i = 0; i < objects.length; i++) {
    const object = new THREE.Object3D();

    // object.position.x = (i % 30) * 400 - 800;
    object.position.x = i * 320;
    object.position.y = -(Math.floor(i / 5) % 5) * 0;
    object.position.z = 1800;
    // object.position.z = Math.floor(i / 5) * 10;

    targets.grid.push(object);
  }

  //

  renderer = new CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  const allbox = renderer.domElement;

  document.getElementById("container").appendChild(allbox);

  controls = new TrackballControls(camera, allbox);
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.addEventListener("change", render);

  transform(targets.helix, 1500);

  //LOOP
  const buttonHelix = document.getElementById("helix");
  buttonHelix.addEventListener("click", function () {
    //remove mouse event
    const cbox = document.querySelectorAll(".element");

    for (let i = 0; i < cbox.length; i++) {
      cbox[i].removeEventListener("mouseover", onDocumentMouseDown, false);
    }

    // //remove mouse event
    const vbox = document.querySelectorAll(".flip-card-back");

    for (let i = 0; i < vbox.length; i++) {
      vbox[i].removeEventListener("mouseover", onDocumentMouseLeave, false);
    }

    const sbox = document.querySelectorAll(".spotify_box");

    for (let i = 0; i < sbox.length; i++) {
      sbox[i].style.display = "block";
    }

    const ibox = document.querySelectorAll("iframe");

    for (let i = 0; i < ibox.length; i++) {
      ibox[i].style.display = "none";
    }

    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "none";

    var elements = document.querySelectorAll(".element");

    for (var i = 0, length = elements.length; i < length; i++) {
      elements[i].classList.remove("mainbox");
    }

    scene.position.x = 0;

    isMouseDown = false;
    stopfunction = false;
    controls.enabled = true;
    transform(targets.helix, 1500);
  });

  //CARD
  const buttonGrid = document.getElementById("grid");
  buttonGrid.addEventListener("click", function () {
    //add mouse event
    const cbox = document.querySelectorAll(".element");
    for (let i = 0; i < cbox.length; i++) {
      cbox[i].addEventListener("mouseover", onDocumentMouseDown, false);
    }
    const flipbox = document.querySelectorAll(".flip-card-back");
    for (let i = 0; i < cbox.length; i++) {
      flipbox[i].addEventListener("mouseout", onDocumentMouseLeave, false);
    }

    const fbox = document.querySelectorAll("iframe");

    for (let i = 0; i < fbox.length; i++) {
      fbox[i].style.display = "none";
    }

    const sbox = document.querySelectorAll(".spotify_box");

    for (let i = 0; i < sbox.length; i++) {
      sbox[i].style.display = "none";
    }

    //document.querySelectorAll(".flip-card-back").style.display = "none";
    // // .flip-card-back

    boxmove = true;

    stopfunction = true;
    isMouseDown = true;

    controls.enabled = false;
    transform(targets.grid, 1500);
    controls.reset();
    scene.position.x = -3520;
    scene.rotation.y = 0;

    document.getElementById("right").style.display = "block";
    document.getElementById("left").style.display = "block";

    var elements = document.querySelectorAll(".element");

    for (var i = 0, length = elements.length; i < length; i++) {
      elements[i].classList.add("mainbox");
    }
  });

  window.addEventListener("resize", onWindowResize);
}

const buttonRight = document.getElementById("right");
buttonRight.addEventListener("click", function () {
  if (scene.position.x > -12780) {
    scene.position.x -= 320;
  } else {
    scene.position.x = -6700;
  }
});

const buttonLeft = document.getElementById("left");
buttonLeft.addEventListener("click", function () {
  if (scene.position.x < 0) {
    scene.position.x += 320;
  } else {
    scene.position.x = -6700;
  }
});

function onDocumentMouseDown() {
  isMouseDown = true;

  const frame = this.querySelector("iframe").getAttribute("data-src");
  const src = frame;
  this.querySelector("iframe").setAttribute("src", src);
  this.querySelector("iframe").style.display = "block";
  this.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
  this.querySelector(".spotify_box").style.display = "block";
}

function onDocumentMouseLeave() {
  var boxone = this.querySelector(".spotify_box iframe");
  boxone.removeAttribute("src");
  this.parentElement.style.transform = "rotateY(0deg)";
  // this.querySelector(".spotify_box").style.display = "none";
  // this.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";

  if (stopfunction) {
  } else {
    isMouseDown = false;
  }

  // boxone.querySelector("iframe").display = "none";
  // boxone.style.display = "none";
}

function transform(targets, duration) {
  TWEEN.removeAll();

  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];
    const target = targets[i];

    new TWEEN.Tween(object.position)
      .to(
        { x: target.position.x, y: target.position.y, z: target.position.z },
        Math.random() * duration + duration
      )
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  }

  new TWEEN.Tween(this)
    .to({}, duration * 2)
    .onUpdate(render)
    .start();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  render();
  controls.update();

  if (!isMouseDown) {
    scene.rotation.y += 0.0005;
  }
}

function render() {
  renderer.render(scene, camera);
}
