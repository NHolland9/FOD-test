import { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

const Details = ({ details }) => {
	const [modalOpen, setModalOpen] = useState(false)
	if (details) {
		return (
			<Modal
				onOpen={() => setModalOpen(true)}
				onClose={() => setModalOpen(false)}
				open={modalOpen}
				trigger={<Button onClick={() => setModalOpen(true)}>view</Button>}
			>
				<Modal.Header>{details.title}</Modal.Header>
				<Modal.Content>
					Directed by {details.director}
					<Modal.Description>Directed by {details.opening_crawl}</Modal.Description>
					<Modal.Description>
						<strong>Release date {details.release_date}</strong>
					</Modal.Description>
				</Modal.Content>
			</Modal>
		)
	}
	return null
}
export default Details
