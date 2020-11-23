<?php declare(strict_types=1);
namespace ItemCopy;

use Laminas\EventManager\Event;
use Laminas\EventManager\SharedEventManagerInterface;
use Omeka\Module\AbstractModule;

/**
 * ItemCopy
 */
/**
 * The ItemCopy plugin.
 */
class Module extends AbstractModule
{
    public function attachListeners(SharedEventManagerInterface $sharedEventManager): void
    {
        $sharedEventManager->attach('Omeka\Controller\Admin\Item',
            'view.browse.after', [$this, 'addItemCopyJs']);
    }

    public function addItemCopyJs(Event $event): void
    {
        $view = $event->getTarget();
        $view->headScript()->appendFile($view->assetUrl('item-copy.js', 'ItemCopy'));
    }
}
