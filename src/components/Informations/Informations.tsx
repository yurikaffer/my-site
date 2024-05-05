export default function Informations() {
    return (
      <div className="w-full h-full sm:pt-[2rem] max-w-[35rem] pr-[1rem] xl:pt-0 xl:max-w-none">
        <div className="flex flex-col gap-6 ">
          <div className="flex justify-between leading-tight sm:px-20">
            <div className="flex flex-col ">
              <span className="gradient-text text-[38px] md:text-md font-extrabold tracking-tight self-center">25</span>
              <p className="text-text self-center">Anos</p>
            </div>
            <div className="flex flex-col   ">
              <span className="gradient-text text-[38px] md:text-md font-extrabold tracking-tight self-center">+2</span>
              <p className="text-text self-center" >Anos de dev</p>
            </div>
            <div className="flex flex-col  ">
              <span className="gradient-text text-[38px] md:text-md font-extrabold tracking-tight self-center">+1K</span>
              <p className="text-text self-center" >Commits</p>
            </div>
          </div>
    
          <p className="text-text" >
           Desde a minha infância, sempre fui muito curioso, um pouco hiperativo e extremamente comunicativo. 
           Essas características me levaram a experimentar, conhecer o mundo e criar amizades verdadeiras que me 
           acompanham até hoje e moldam quem eu sou.
          </p>
          <p className="text-text" >
            Tive acesso ao computador desde muito cedo, e claro, foi através dos jogos e do fascínio por mundos virtuais 
            que fui introduzido a esse vasto universo binário da tecnologia. Talvez eu fosse um clássico nerd da 
            informática, mas foi essa criação que, futuramente, me fez querer trabalhar com tecnologia (sem fazer a menor 
            ideia do que seria um código). Muito tempo depois, a programação entrou na minha vida como uma profissão e 
            como uma ferramenta auxiliar para entender o mundo e o porquê das coisas.
          </p>
          <p className="text-text" >
            Eu gosto de dizer que desde que entendi a da programação, ela tem mudado minha vida. A princípio no âmbito profissional, 
            abrindo portas para novas oportunidades e caminhos que eu poderia seguir, e, mais profundamente, a 
            programação e a lógica mudaram meus pensamentos e a forma em que estruturo novas ideias. Se você é um 
            desenvolvedor experiente, imagino que saiba do que estou falando. 
          </p>
          <div className="flex flex-col">
            <p className="text-text italic" >
              "Embora o mundo não seja programado, ele é, definitivamente, programável."
            </p>
          </div>
        </div>
      </div>
    )
  }