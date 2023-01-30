import styles from "./Tasks.module.css";

export function Tasks({tasks}:TasksProps) {
    return (
        <main className={styles.tasks}>
            <header><h2>Tarefas criadas {tasks.length}</h2></header>
            {tasks.map( task => {
                return (
                    <div className={styles.task} key={task}>{task}</div>
                )
            })}
        </main>
    );
}

interface TasksProps {
    tasks:string[]
}