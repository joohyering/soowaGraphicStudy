import { GlowParticle } from "./glowparticle.js";

/*배열 안에 객체가 들어간 형태*/
const COLORS = [
    {r:197, g:206, b:255},        //blue
    {r: 253, g: 255, b: 191},    //yellow
    {r: 255, g: 202, b: 237},    //pupple
    {r: 197, g: 243, b: 255},    //skyblue
    {r: 216, g: 255, b: 202},    //green
];

/*클래스 개념이 없다고 했는데 어떻게 ? */
/*전통 js에만 없고 모던 js에는 있는건가 ? */
class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        /* document.creatElement()는 문서 안에 괄호 안에 있는 요소를 만든다는 의미를 가진다. span 태그 등 태그를 이용할 수 있나봄,, 신기해 */
        document.body.appendChild(this.canvas);
        /* 부모 노드에서 자식 노드를 추가하는 메서드
        append : 노드 객체와 DOMString(text) 사용 가능, 한 번에 여러 개의 자식 요소 설정 가능
        appendChild : DOMString 사용 불가, 한 번에 하나의 자식 노드만 생성 가능 */
        
        /*Javascript에서 사용되는 Html 요소(element)의 생성(CreateElement), 추가(appendChild)*/
        /* Html에서 자바스크립트를 사용하게 되면 값을 취득하는 것만큼 동적으로 생성하는 것도 많이 하게 된다.
        이유는 동적인 효과를 나타내기 위해, 사용자의 환경이나 액션(event)에 따라 페이지의 결과를 달리 나타내기 위해 등 다양 */
        /* html 바디 부분에 직접 쓰지 않아도 자바스크립트를 활용해 프로그램 적으로 필요한 요소들 추가 가능 */
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 15;
        this.particles = [];
        this.maxRadius = 900;
        this.minRadius = 400;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.ctx.globalCompositeOperation = 'saturation';

        this.createParticles();
    }

    createParticles() {
        let curColor = 0;
        this.particles = [];

        for (let i = 0; i<this.totalParticles; i++) {
            const item = new GlowParticle(
                Math.random() * this.stageWidth, 
                Math.random() * this.stageHeight,
                Math.random() *
                (this.maxRadius - this.minRadius) + this.minRadius,
                COLORS[curColor]
            );

            if (++curColor >= COLORS.length) {
                curColor = 0;
            }

            this.particles[i] = item;
        }
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.totalParticles; i++) {
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
    }
}

window.onload = () => {
    new App();
}