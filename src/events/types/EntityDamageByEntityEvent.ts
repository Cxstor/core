import { EntityDamageEvent } from "./EntityDamageEvent";
import { Entity } from "../../entity/Entity";

export class EntityDamageByEntityEvent extends EntityDamageEvent {

    public static getBukkitClasspath(): string {
        return 'org.bukkit.event.entity.EntityDamageByEntityEvent';
    }

    /**
     * Gets the entity who caused the damage
     */
    public getDamager(): Entity | null {
        const javaDamager = this.toJava().getDamager();
        if (!javaDamager) return null;
        return Entity.fromJava(javaDamager);
    }

}
