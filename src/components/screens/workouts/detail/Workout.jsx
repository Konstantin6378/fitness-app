import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Fragment } from 'react'

import WorkoutLogService from '../../../../services/workout/workout-log.service.js'
import HeaderWorkout from './HeaderWorkout.jsx'
import Loader from '../../../ui/Loader.jsx'
import ExerciseItem from './ExerciseItem.jsx'
import styles from './Workout.module.scss'



const Workout = () => {
	const { id } = useParams()

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout log', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})



	return (
		<>
			<HeaderWorkout
				isSuccess={isSuccess}
				workoutLog={workoutLog}
			/>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 !== 0 && index !== workoutLog.exerciseLogs.length - 1 && (
									<div className={styles.line} />
								)}
							</Fragment>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default Workout
