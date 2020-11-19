import React from 'react';
import Resource from '../components/Resource'

const ResourcesContainer = (props) => {
    return (
        <div>
            <ul>
            {props.category.resources.map(resource => 
                <Resource   resource = {resource}
                            key={resource.id}
                           />)}
            </ul>
        </div>
    )
}

export default ResourcesContainer;