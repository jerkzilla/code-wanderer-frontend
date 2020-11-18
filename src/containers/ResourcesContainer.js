import React from 'react';
import Resource from '../components/Resource'

const ResourcesContainer = (props) => {
    return (
        <div>
            {props.category.resources.map(resource => 
                <Resource   resource = {resource}
                            key={resource.id}
                           />)}
        </div>
    )
}

export default ResourcesContainer;