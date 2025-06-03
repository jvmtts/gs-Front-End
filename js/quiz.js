const questions = [
  {
    q: "O que é a FloodGuard Tech?",
    o: ["Empresa de limpeza", "Solução de monitoramento e alerta contra enchentes", "Aplicativo bancário", "Empresa de seguros"],
    a: 1
  },
  {
    q: "Qual o principal objetivo da FloodGuard Tech?",
    o: ["Gerar lucros", "Controlar o clima", "Salvar vidas com alertas antecipados", "Construir casas"],
    a: 2
  },
  {
    q: "O que significa IoT?",
    o: ["Interface de operações técnicas", "Internet das coisas", "Instalação on-line técnica", "Inteligência operacional terrestre"],
    a: 1
  },
  {
    q: "Quais dados a FloodGuard coleta?",
    o: ["Temperatura corporal", "Níveis de rios e chuvas", "Número de moradores", "Imagens de satélite"],
    a: 1
  },
  {
    q: "Para quem é essa solução?",
    o: ["Apenas engenheiros", "Crianças", "Comunidades em risco e órgãos públicos", "Empresas multinacionais"],
    a: 2
  },
  {
    q: "Como o alerta chega às pessoas?",
    o: ["Carta pelo correio", "Mensagem em mural público", "Celular e outros dispositivos", "Som de sirene local"],
    a: 2
  },
  {
    q: "A tecnologia é baseada em que?",
    o: ["Cartografia", "IA e sensores conectados", "Fotografia", "Jogos interativos"],
    a: 1
  },
  {
    q: "Qual benefício direto é citado?",
    o: ["Economia de energia", "Melhoria do trânsito", "Salvamento de vidas e bens", "Diminuição da poluição"],
    a: 2
  },
  {
    q: "Que tipo de alerta é gerado?",
    o: ["Atrasado", "Com base em achismos", "Personalizado e em tempo real", "Manual"],
    a: 2
  },
  {
    q: "O sistema funciona quando?",
    o: ["Somente durante o dia", "Apenas em feriados", "24/7", "Em horários comerciais"],
    a: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question-box");
const optionsBox = document.getElementById("options-box");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const progressFill = document.getElementById("progress-fill");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionBox.textContent = q.q;
  optionsBox.innerHTML = "";

  q.o.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opt;
    btn.addEventListener("click", () => selectOption(btn, index));
    optionsBox.appendChild(btn);
  });

  updateProgress();
}

function selectOption(btn, index) {
  Array.from(optionsBox.children).forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  btn.dataset.selected = index;
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector(".option-btn.selected");
  if (!selected) return;

  const answer = parseInt(selected.dataset.selected);
  if (answer === questions[currentQuestion].a) score++;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function updateProgress() {
  const percentage = ((currentQuestion) / questions.length) * 100;
  progressFill.style.width = percentage + "%";
}

function showResult() {
  questionBox.style.display = "none";
  optionsBox.style.display = "none";
  nextBtn.style.display = "none";
  progressFill.style.width = "100%";
  resultBox.classList.remove("hidden");
  resultBox.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

loadQuestion();
