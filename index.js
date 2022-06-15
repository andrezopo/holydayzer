import express from "express";

const server = express();

server.listen(5000);

const holidays = [
  { date: "01/01/2022", name: "Confraternização mundial" },
  { date: "03/01/2022", name: "Carnaval" },
  { date: "17/04/2022", name: "Páscoa" },
  { date: "21/04/2022", name: "Tiradentes" },
  { date: "01/05/2022", name: "Dia do trabalho" },
  { date: "16/06/2022", name: "Corpus Christi" },
  { date: "07/09/2022", name: "Independência do Brasil" },
  { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
  { date: "02/11/2022", name: "Finados" },
  { date: "15/11/2022", name: "Proclamação da República" },
  { date: "25/12/2022", name: "Natal" },
];

const hoje = new Date().toLocaleDateString();
// const hoje = "25/12/2022";

function defineRoutes() {
  server.get("/holidays", (req, res) => {
    res.send(holidays);
  });

  server.get("/is-today-holiday", (req, res) => {
    const todayHolidays = holidays.filter((day) => day.date === hoje);
    if (todayHolidays.length === 0) {
      res.send("Não, hoje não é feriado!");
    } else {
      for (let i = 0; i < todayHolidays.length; i++) {
        res.send(`Sim, hoje é ${todayHolidays[i].name}!`);
      }
    }
  });

  server.get("/holidays/:holidaysMonth", (req, res) => {
    const month = parseInt(req.params.holidaysMonth);
    const monthHolidays = holidays.filter((day) => {
      const testMonth = day.date.split("/")[1];
      return parseInt(testMonth) === month;
    });
    res.send(monthHolidays);
  });
}

defineRoutes();
