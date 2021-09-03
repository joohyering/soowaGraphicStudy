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
        /* 렌더링 */

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 15;
        this.particles = [];
        this.maxRadius = 900;
        this.minRadius = 400;

        window.addEventListener('resize', this.resize.bind(this), false);
        /* 프로그래밍 언어에서의 event : 사용자가 어떤 결과를 유발시킬만한 행동을 하는 것 */
        
        /* 명시적으로 위의 this를 Window가 아닌 다른 객체로 바꿔주는 함수가 call, apply, bind이다.
        call과 apply는 함수를 호출하는 함수이다.
        그러나 그냥 실행하는 것이 아니라 첫 번째 인자에 this로 setting하고 싶은 객체를 넘겨주어 this를 바꾸고나서 실행한다.
        call과 apply의 유일한 차이점은, 첫 번째 인자(this를 대체할 값)를 제외하고, 실제 say에 필요한 parameter를 입력하는 방식이다.
        call과는 다르게 apply함수는 두 번째 인자부터 모두 배열에 넣어야 한다.
        bind함수가 call, apply와 다른 점은 함수를 실행하지 않는다는 점이다.
        대신 bound함수를 리턴한다. 이 bound함수(boundSay)는 이제부터 this를 obj로 갖고 있기 때문에 나중에 사용해도 된다.
        bind에 사용하는 나머지 rest 파라미터는 call과 apply와 동일하다.*/
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