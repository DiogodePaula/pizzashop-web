import { Link, useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError() as Error; // devolve o erro que aconteceu

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:
      </p>
      {/* pre = pre formatação, na maioria dos casos nao e correto mostrar o erros para o usuario */}
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o{" "}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  );
}

// aqui seria o lugar correto para fazer a parte de observabilidade da aplicação, então o erro aqui poderia
// ser enviado para alguma plataforma como a base line, bugSnag ou dataDog

// O Datadog é uma plataforma de análise e monitorização para aplicações em grande escala. É uma ferramenta
// de monitorização e análise para equipas de tecnologia da informação (TI) e DevOps.
